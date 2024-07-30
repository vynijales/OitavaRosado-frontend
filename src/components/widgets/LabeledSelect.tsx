import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Options {
    value: string;
    label: string;
}

interface LabeledSelectProps {
    name: string;
    options: Options[];
    label?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    onChange?: (value: string) => void;
}

export function LabeledSelect({ label, name, options, value, placeholder, className, onChange }: LabeledSelectProps) {
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    const [selectedValue, setSelectedValue] = useState(value || "");

    useEffect(() => {
        if (value) {
            setSelectedValue(value);
        }
    }, [value]);
    
    const handleChange = (newValue: string) => {
        setSelectedValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };
        
    return (
        <div className={`relative ${className}`}>
            <Label htmlFor={name} className="absolute translate-x-2 -translate-y-2 z-[2] text-xs font-bold bg-white">
                {label ? label : nameCapitalized}
            </Label>
            <Select value={selectedValue} onValueChange={handleChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={selectedValue ? undefined : placeholder || "Selecione uma opção"} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option, index) => (
                        <SelectItem key={index} value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <input type="hidden" name={name} value={selectedValue} />
        </div>
    );
}