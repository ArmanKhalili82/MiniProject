import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

const CustomDialog = ({ isOpen, onOpenChange, title, children }) => (
  <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
    <Dialog.Trigger asChild>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {title}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed bg-white rounded-lg shadow-lg p-6 w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
        {children}
        <Dialog.Close asChild>
          <button className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Close
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default CustomDialog;
