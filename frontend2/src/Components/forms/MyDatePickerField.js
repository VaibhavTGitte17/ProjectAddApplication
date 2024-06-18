import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";

export default function MyDatePickerField(props) {
  
  const { label, width, name, control } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Use Controller from react-hook-form */}
      <Controller
        name={name} // Name for the input field
        control={control} // Control prop from react-hook-form
        render={({ field: { onChange, value },
          fieldState: { error },
          formState,
        
        }) => ( 
          <DatePicker
            label={label} 
            sx={{ width: { width } }} 
            onChange={onChange} 
            value={value}
            slotProps={{
              textField :{
                error: !! error,
                helperText : error?.message,
              }
            }

            }
          />
        )}
      />
    </LocalizationProvider>
  );
}
