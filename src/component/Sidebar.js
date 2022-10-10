import React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Sidebar(props) {
    const {data,servicesort}=props;
    const [checkedState, setCheckedState] = React.useState(
      new Array(5).fill(false)
    );
    const checkbox = (event) => {
      if(event.target.value==='0'){
        document.getElementById("停車場").checked===true?checkedState[parseInt(event.target.value)]="停車場":checkedState[parseInt(event.target.value)]=false;
      }
      else if(event.target.value==='1'){
        document.getElementById("寵物友善").checked===true?checkedState[parseInt(event.target.value)]="寵物友善":checkedState[parseInt(event.target.value)]=false;
      }
      else if(event.target.value==='2'){
        document.getElementById("洗衣機").checked===true?checkedState[parseInt(event.target.value)]="洗衣機":checkedState[parseInt(event.target.value)]=false;
      }
      else if(event.target.value==='3'){
        document.getElementById("免費無線網路").checked===true?checkedState[parseInt(event.target.value)]="免費無線網路":checkedState[parseInt(event.target.value)]=false;
      }
      else if(event.target.value==='4'){
        document.getElementById("禁煙客房").checked===true?checkedState[parseInt(event.target.value)]="禁煙客房":checkedState[parseInt(event.target.value)]=false;
      }
      console.log(servicesort)
      servicesort(checkedState)
    };
  return (
    <nav className="top-0 fixed lg:relative z-50 w-full flex flex-wrap items-center justify-between lg:justify-start navbar-expand-lg bg-white shadow-xl lg:overflow-y-auto flex-col lg:flex-nowrap lg:w-80 py-4 px-6 ">
       <h1>透過以下選項搜尋</h1>
       <hr size="100px" align="center" width="100%"></hr>
       <div>
       <div class="item-content">
        <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography variant="body2" labelId="demo-select-small" id="demo-select-small" >
          <Checkbox id="停車場" onChange={checkbox} value={'0'}/>停車場<br></br>
          <Checkbox id="寵物友善" onChange={checkbox} value={'1'}/>寵物友善<br></br>
          <Checkbox id="洗衣機" onChange={checkbox} value={'2'}/>洗衣機<br></br>
          <Checkbox id="免費無線網路" onChange={checkbox} value={'3'}/>免費無線網路<br></br>
          <Checkbox id="禁煙客房" onChange={checkbox} value={'4'}/>禁煙客房<br></br>
          </Typography>
        </CardContent>
        </Card>
        </div>
      </div>
    </nav>
  );
}
