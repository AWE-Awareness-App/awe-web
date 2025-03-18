import React from 'react';

const AccountDeletion: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Request Account Deletion</h1>
      <p className="text-lg mb-4">
        If you would like to request the deletion of your account, please follow these steps:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Send an email to <a href="mailto:support@arcticflamegames.com" className="text-blue-500">support@arcticflamegames.com</a></li>
        <li>In the subject line, write: <strong>"Account Deletion Request"</strong></li>
        <li>Include registered email address and game in the email body.</li>
      </ul>
      <p className="text-lg">
        Our support team will process your request and follow up with you within 48 hours. Please note that once your account is deleted, all data will be permanently removed.
      </p>
    </div>
  );
};

export default AccountDeletion;
