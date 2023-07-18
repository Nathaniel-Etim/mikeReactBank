import React from "react";
import ContactHeader from "../../components/contactHeader/contactHeader";
import ContactBody from "../../components/contactBody/contactBody";
import SubForm from "../../components/subFotter/subFotter";
function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <ContactBody />
      <SubForm />
    </div>
  );
}

export default ContactPage;
