import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function Box(pops) {
    const {paragrapgOne}= props
  return (
    <div className='px-10 py-10 '>
        <div className='sm:px-0 lg:px-80'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <p className='text-xl font-medium min-w-96'>{paragrapgOne}</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className='text-gray-400 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </AccordionDetails>
      </Accordion>
      </div>

    </div>
  );
}

export default Box