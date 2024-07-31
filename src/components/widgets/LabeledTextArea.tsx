import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface LabeledTextAreaProps {
    label?: string;
    name: string;
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    defaultValue?: string;
}

function LabeledTextArea({ label, name, placeholder, className, value, onChange, defaultValue }: LabeledTextAreaProps) {
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className={`relative ${className}`}>
            <Label htmlFor={name} className="absolute translate-x-2 -translate-y-2 z-[2] text-xs font-bold bg-white">
                { label ? label : nameCapitalized }
            </Label>
            <Textarea
                id={name}
                name={name}
                placeholder={placeholder ? placeholder : nameCapitalized}
                value={value}
                onChange={onChange}
                defaultValue={defaultValue}
            />
        </div>
    );
}

export { LabeledTextArea };