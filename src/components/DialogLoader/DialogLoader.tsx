import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle
} from "@/components/ui/dialog"
import { Loader2 } from 'lucide-react'

const DialogLoader = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <Dialog open={isOpen}>
            <DialogContent className="bg-transparent shadow-none border-none flex flex-col items-center">
                <DialogTitle>
                    <p className="text-white text-lg font-semibold mt-4">Processing...</p>
                </DialogTitle>
                <Loader2 className="animate-spin text-white" size={50} />
            </DialogContent>
        </Dialog>
    )
}

export default DialogLoader
