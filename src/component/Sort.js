import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
export default function Sort(props) {
  const {data,moneysort}=props;
  const [value, setvalue] = React.useState('');
  const handleChange = (event) => {
    setvalue(event.target.value);
    if (event.target.value==="價格由高到低"){

        data.sort(function (a, b) {
            return b.price - a.price;
          });
    }
    else if(event.target.value==="價格由低到高"){

        data.sort(function (a, b) {
            return a.price - b.price;
          });
    }
    else if(event.target.value==="評分由高到低"){

        data.sort(function (a, b) {
            return b.score - a.score;
          });
    }
    else if(event.target.value==="評分由低到高"){

        data.sort(function (a, b) {
            return a.score - b.score;
          });
    }
    moneysort(data)
  };
  return (
        <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        onChange={handleChange}
        displayEmpty
        >
        <MenuItem value="">
          <em>---為您精選---</em>
        </MenuItem>
        <MenuItem value={"價格由高到低"}>價格由高到低</MenuItem>
        <MenuItem value={"價格由低到高"}>價格由低到高</MenuItem>
        <MenuItem value={"評分由高到低"}>評分由高到低</MenuItem>
        <MenuItem value={"評分由低到高"}>評分由低到高</MenuItem>
      </Select>
  );
}
