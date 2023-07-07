import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { aboutIsOpenAtom } from "../Footer";

function AboutDialog() {
    let [aboutIsOpen, setAboutIsOpen] = useAtom(aboutIsOpenAtom);

    return (
        <AnimatePresence>
            { aboutIsOpen && (
            
                <Dialog
                    open={aboutIsOpen}
                    onClose={() => setAboutIsOpen(false)}
                    className="absolute z-50 w-full h-full"
                >
                        
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="fixed h-full w-full inset-0 flex items-center justify-center p-4">
                            <Dialog.Panel className="w-[32rem] p-8 rounded-2xl border-4 border-white bg-zinc-950">
                                <Dialog.Title className="text-3xl font-bold">About</Dialog.Title>
                                <Dialog.Description>
                                    <h1 className="font-bold mt-4">What?</h1>
                                        <p>
                                            I created this site as an alternative to the official <a href="https://www.examinations.ie/" target="_blank" className="underline hover:decoration-2">examinations.ie</a> website, which is an arguable affront to God. (It proudly displays an e-Government award from 2006. It is as old as I am.)
                                        </p>
                                    <h1 className="font-bold mt-4">Why?</h1>
                                        <p>
                                            The goal from the get-go was to, firstly, improve upon my web-dev skills, and secondly, to save those precious seconds you spend every day on that hellish site.
                                        </p>
                                    <h1 className="font-bold mt-4">Who?</h1>
                                        <p> 
                                            This website was made by <a href="https://www.mudkip.live" target="_blank" className="underline hover:decoration-2">Bence R</a>
                                            , with heavy inspiration from Thomas Forbes&apos; &ldquo;<a href="https://examfinder.ie/" target="_blank" className="underline hover:decoration-2">examfinder.ie</a>&ldquo;. Many thanks to him for the advice and for allowing me to use his data.json file.
                                        </p>
                                </Dialog.Description>

                                <button onClick={() => setAboutIsOpen(false)} className="mt-4 rounded-md p-2 hover:scale-105">Close</button>
                            </Dialog.Panel>
                        </div>
                    </motion.div>
                </Dialog>
            
            )}
        </AnimatePresence>
    );
}

export default AboutDialog;