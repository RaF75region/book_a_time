import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

interface IProps {
    name:string,
    label: string,
    placeholder?: string,
    helperText?: string
    fullWidth:boolean
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    endIcon?: JSX.Element
}

export default function CustInput({
    name,
    label,
    placeholder,
    helperText,
    fullWidth,
    value,
    onChange,
    endIcon
}: IProps) {

    const getIcon=()=>{
        if(endIcon){
            return endIcon
        }
        return null
    }

    return <FormControl sx={{width:'100%'}}>
        <FormLabel>{label}</FormLabel>
        <Input value={value} onChange={onChange} fullWidth={fullWidth} name={name} placeholder={placeholder}
            endDecorator={
                <>
                {getIcon()}
                </>
            }
            />
        <FormHelperText>{helperText}</FormHelperText>
    </FormControl>

}