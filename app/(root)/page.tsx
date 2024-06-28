"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Button } from "@/components/ui/button";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  return (
    <div className="p-4">
      <p>Root Page</p>
      <Button onClick={onOpen}>Open</Button>
    </div>
  );
};

export default SetupPage;
