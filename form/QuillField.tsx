import { useEffect, useRef } from "react";
import { useQuill } from "react-quilljs";
import 'quill/dist/quill.snow.css';

export const QuillField = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
    const { quill, quillRef } = useQuill({ theme: 'snow' });
    const isInitialized = useRef(false);

    useEffect(() => {
        if (!quill) return;

        // Set initial value only once when quill is ready
        if (!isInitialized.current && value) {
            quill.clipboard.dangerouslyPasteHTML(value);
            isInitialized.current = true;
        }

        // sync to formik on change
        quill.on('text-change', () => {
            onChange(quill.root.innerHTML);
        });
    }, [quill, onChange]);

    // Handle external value changes (for edit mode)
    useEffect(() => {
        if (quill && value && isInitialized.current) {
            const currentContent = quill.root.innerHTML;
            if (currentContent !== value) {
                quill.clipboard.dangerouslyPasteHTML(value);
            }
        }
    }, [quill, value]);

    return <div className="min-h-[180px]" ref={quillRef} />;
}
