import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LabeledInputProps {
    label?: string;
    name: string;
    type: string;
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LabeledInput({ label, name, type, placeholder, className, value, onChange }: LabeledInputProps) {
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className={`relative ${className}`}>
            <Label htmlFor={name} className="absolute translate-x-2 -translate-y-2 z-[2] text-xs font-bold bg-white">
                { label ? label : nameCapitalized }
            </Label>
            <Input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder ? placeholder : nameCapitalized}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}