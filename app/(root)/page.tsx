"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal
        title="Test"
        description="Hello there!"
        isOpen
        onClose={() => {
          console.log("closing");
        }}
      >
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
