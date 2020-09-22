/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { FilterOptionsState } from '@material-ui/lab/useAutocomplete';
// import { get } from '../../services/api/userApi';

const filter = createFilterOptions<FamilyType>();

const SelectCreate = () => {
  const [value, setValue] = useState<FamilyType | null>(null);

  const getFamily = (): FamilyType[] => {
    // const families =  get('family')
    // return families
    return []
  }

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue: string | FamilyType | null) => {
        if (typeof newValue === 'string') {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options: FamilyType[], params: FilterOptionsState<FamilyType>) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            name: `Créer la famille "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={getFamily()}
      getOptionLabel={(option: any) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option: any) => option.title}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params:any) => (
        <TextField {...params} label="Choisir un foyer" variant="outlined" />
      )}
    />
  );
}

export default SelectCreate

interface FamilyType {
  inputValue?: string;
  name: string;
}

// const top100Films: FilmOptionType[] = [
//     { title: 'Dienst', year: 1994 },
//     { title: 'Carre', year: 1972 }]