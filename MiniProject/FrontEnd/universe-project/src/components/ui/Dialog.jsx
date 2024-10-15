import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import Button from './Button';

const CustomDialog = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed bg-white rounded-lg shadow-lg p-6 w-full max-w-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-xl font-semibold mb-4">{title}</Dialog.Title>
          {children}
          <div className="mt-4 text-right">
            <Dialog.Close asChild>
              <Button className="bg-gray-300 hover:bg-gray-400">Close</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomDialog;
