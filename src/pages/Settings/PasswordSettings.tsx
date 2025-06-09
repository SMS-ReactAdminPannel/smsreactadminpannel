import React, { useState } from "react";
import { FONTS } from "../../constants/uiConstants";
import { FaEye, FaEyeSlash } from "react-icons/fa";
 import { changePassword } from "../../features/services/password";

const PasswordSettings = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChangePassword = async () => {
    setError("");
    setSuccess("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      const payload = { oldPassword, newPassword};
      const res = await changePassword(payload); // Replace with actual API call
      console.log(res,"response")
      if (res?.success) {
        setSuccess("Password changed successfully.");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError("Failed to change password.");
      }
    } catch (err) {
      setError("An error occurred while changing password.");
      console.error(err);
    }
  };

  return (
    <div className="p-5 pb-52" style={{ fontFamily: FONTS.header.fontFamily }}>
      <div className="grid grid-cols-2 gap-4">
        {/* Old Password */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
          <div className="relative">
            <input
              id="old-password"
              type={showOld ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter your old password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowOld(!showOld)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
            >
              {showOld ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
          <div className="relative">
            <input
              id="new-password"
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="col-span-2 mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
          <div className="relative">
            <input
              id="confirm-password"
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your new password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Messages */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-600 mt-4">{success}</p>}

      {/* Submit & Forgot Password */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={handleChangePassword}
          className="rounded-lg px-6 py-2 text-white"
          style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}
        >
          Change Password
        </button>
        <a href="#" className="text-red-700 text-sm underline">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default PasswordSettings;
