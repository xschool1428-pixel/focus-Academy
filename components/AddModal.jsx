"use client";

import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function AddModal({ isOpen, onOpenChange, title, children }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 z-[80] backdrop-blur-md"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#111] border border-violet/30 rounded-2xl p-6 shadow-[0_10px_40px_rgba(124,58,237,0.2)] z-[90]"
              >
                <div className="flex justify-between items-center mb-6">
                  <Dialog.Title className="text-2xl font-syne font-bold text-white">
                    {title}
                  </Dialog.Title>
                  <Dialog.Close className="text-gray-400 hover:text-cyan transition-colors">
                    <X size={24} />
                  </Dialog.Close>
                </div>
                
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
