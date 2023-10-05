import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { RxArrowRight } from 'react-icons/rx';
import { CiDeliveryTruck } from 'react-icons/ci';
import { TfiWorld } from 'react-icons/tfi';
import { MdPayment } from 'react-icons/md';

const CustomizationWrapper = styled.div`
  ${tw`p-4`}
`;

const StepContainer = styled.div`
  ${tw`border border-solid border-gray-300  mb-4 relative`}
  
  &::before {
    ${tw`content-[''] absolute inset-x-0 top-0 h-px bg-gray-300`}
  }
`;

const StepFooter = styled.div`
  ${tw`flex justify-end items-center p-4`}
  border-top: 1px solid #ccc;
`;

const StepHeader = styled.div`
  ${tw`flex justify-center items-center`}
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
`;

const StepTitle = styled.div`
  ${tw`flex items-center space-x-2`}
`;

const StepIcon = styled.div<{ current: boolean }>`
  font-size: ${(props) => (props.current ? '40px' : '30px')};
  color: ${(props) => (props.current ? '#007BFF' : '#000')};
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 5px;
  }
`;


const StepContent = styled.div`
  ${tw`mt-4`}

  .left {
    margin-left:30%;
    margin-right:1%;
    border: 1px #eee solid;
    border-radius: 10px;
    padding: 10px;
  }


  .headertop{
    display: flex; 
    justify-content: space-between;
  }

  .headerbottom{
    display: flex; 
    justify-content: space-between;
    flex-direction:row;

    .Width{
        display: flex; 
        justify-content: space-between;
    }

    .Height{
        display: flex; 
        justify-content: space-between;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;


const Label = styled.label`
  font-size: 15px;
  font-family: Roboto;
  margin-bottom: 5px;
  color: #cbcbc9;
`;

const InputField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  color: black;
`;

const StepCheckbox = styled.label`
  ${tw`block`}
`;

const SelectorWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 16px;
`;

const SelectorInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  color: black;
`;

const SelectorDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const SelectorOption = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const options = [
  { value: '1', label: 'DH - Double Hung' },
  { value: '2', label: 'NDH - New Const. Double Hung' },
  { value: '3', label: 'PW - Solid Picture Window' },
  { value: '4', label: 'NPW - New Const. Solid Picture Window' },
  { value: '5', label: 'SL - 2 Lite Slider' },
  { value: '6', label: 'NSL - New Const. 2 Lite Slider' },
  { value: '7', label: 'EV - 3 Lite End Vent Slider 1/4 1/2 1/4' },
  { value: '8', label: 'NEV - New Const. 3 Lite End Vent Slider 1/4 1/2 1/4' },
  { value: '9', label: 'CV - 3 Equal Lites Center Vent' },
  { value: '10', label: 'NCV - New Const. 3 Equal Lites Center Vent' },
  { value: '11', label: 'DS - Direct Set' },
];


const colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    
  ];
  
  const screenOptions = [
    { value: 'lcd', label: 'LCD' },
    { value: 'led', label: 'LED' },
    { value: 'oled', label: 'OLED' },
    
  ];


const OrderCustomization: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <CustomizationWrapper>
      <h1>customize order</h1>

      {currentStep === 1 && (
        <Step1 currentStep={currentStep} nextStep={nextStep} previousStep={previousStep} />
      )}
      {currentStep === 2 && (
        <Step2 currentStep={currentStep} nextStep={nextStep} previousStep={previousStep} />
      )}
      {currentStep === 3 && (
        <Step3 currentStep={currentStep} nextStep={nextStep} previousStep={previousStep} />
      )}
      {currentStep === 4 && (
        <Step4 currentStep={currentStep} nextStep={nextStep} previousStep={previousStep} />
      )}
    </CustomizationWrapper>
  );
};

const Step1: React.FC<{
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
}> = ({ currentStep, nextStep, previousStep }) => {
  const [quantity, setQuantity] = useState('0');
  const [width, setWidth] = useState('width');
  const [height,setHeight] = useState('height');
  const [widthd,setWidthd] = useState('.decimal');
  const [heightd,setHeightd] = useState('.0');
  const [selectedOption, setSelectedOption] = useState(null);
  const [colorSelected, setColorSelected] = useState(null); 
  const [colorIsOpen, setColorIsOpen] = useState(false); 
  const [screenSelected, setScreenSelected] = useState(null); 
  const [screenIsOpen, setScreenIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  


  const handleSelectorClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleInputChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleInputChangewidth = (e) => {
    setWidth(e.target.value);
  };

  const handleInputChangeheight = (e) => {
    setHeight(e.target.value);
  };
  
  const handleInputChangewidthd = (e) => {
    setWidthd(e.target.value);
  };

  const handleInputChangeheightd = (e) => {
    setHeightd(e.target.value);
  };


  const handleColorSelectorClick = () => {
    setColorIsOpen(!colorIsOpen);
  };

  const handleColorOptionClick = (colorOption) => {
    setColorSelected(colorOption);
    setColorIsOpen(false);
  };

  
  const handleScreenSelectorClick = () => {
    setScreenIsOpen(!screenIsOpen);
  };

  const handleScreenOptionClick = (screenOption) => {
    setScreenSelected(screenOption);
    setScreenIsOpen(false);
  };


  
  
  // Create state to track the selected glass type for each group
  const [selectedGlassTypeMain1, setSelectedGlassTypeMain1] = useState(null);
  const [selectedGlassTypeMain2, setSelectedGlassTypeMain2] = useState(null);
  const [selectedGlassTypeMain3, setSelectedGlassTypeMain3]= useState(null);

  // Function to handle selection of sub-checkboxes for Main 1
  const handleSubCheckboxChangeMain1 = (label) => {
    setSelectedGlassTypeMain1(label);
  };

  // Function to handle selection of sub-checkboxes for Main 2
  const handleSubCheckboxChangeMain2 = (label) => {
    setSelectedGlassTypeMain2(label);
  };

  const handleSubCheckboxChangeMain3 = (label) =>{
    setSelectedGlassTypeMain3(label);
  }

  // Create state to track which glass type is selected for the first two checkboxes
  const [selectedGlassType, setSelectedGlassType] = useState('');

  // Handle glass type checkbox change for the first two checkboxes
  const handleFirstTwoGlassTypeChange = (label) => {
    // Unselect the other checkbox when one is clicked
    if (selectedGlassType === label) {
      setSelectedGlassType('');
    } else {
      setSelectedGlassType(label);
    }
  };

  return (
    <StepContainer>
      <StepHeader>
        <StepTitle>
          <StepIcon current={currentStep === 1}>
            <LiaClipboardListSolid />
          </StepIcon>
          <StepIcon current={currentStep === 1}>
            <RxArrowRight />
          </StepIcon>
          <StepIcon current={currentStep === 2}>
            <CiDeliveryTruck />
          </StepIcon>
          <StepIcon current={currentStep === 2}>
            <RxArrowRight />
          </StepIcon>
          <StepIcon current={currentStep === 3}>
            <TfiWorld />
          </StepIcon>
          <StepIcon current={currentStep === 3}>
            <RxArrowRight />
          </StepIcon>
          <StepIcon current={currentStep === 4}>
            <MdPayment />
          </StepIcon>
        </StepTitle>
        <div></div>
      </StepHeader>
      <StepContent>
        <div className="left">
          <div className="header">
            <div className="headertop">
              <div className="Quantity">
                <InputWrapper>
                  <Label>Quantity</Label>
                  <InputField
                    type="number"
                    min={0}
                    value={quantity}
                    onChange={handleInputChange}
                    placeholder="quantity"
                  />
                </InputWrapper>
              </div>
              <div className="Window Type">
                <SelectorWrapper>
                  <Label>Window Type</Label>
                  <SelectorInput
                    type="text"
                    placeholder="Select an option"
                    onClick={handleSelectorClick}
                    value={selectedOption ? selectedOption.label : ''}
                    onChange={handleFilterChange}
                  />
                  {isOpen && (
                    <SelectorDropdown isOpen={isOpen}>
                      {filteredOptions.map((option) => (
                        <SelectorOption key={option.value} onClick={() => handleOptionClick(option)}>
                          {option.label}
                        </SelectorOption>
                      ))}
                    </SelectorDropdown>
                  )}
                </SelectorWrapper>
              </div>
              <div className="Color">
              <SelectorWrapper>
              <Label>Color</Label>
                  <SelectorInput
                    type="text"
                    placeholder="Select a color"
                    onClick={handleColorSelectorClick}
                    value={colorSelected ? colorSelected.label : ''}
                  />
                  {colorIsOpen && (
                    <SelectorDropdown isOpen={colorIsOpen}>
                      {colorOptions.map((colorOption) => (
                        <SelectorOption
                          key={colorOption.value}
                          onClick={() => handleColorOptionClick(colorOption)}
                        >
                          {colorOption.label}
                        </SelectorOption>
                      ))}
                    </SelectorDropdown>
                  )}
                </SelectorWrapper>
              </div>
            </div>
            <div className="headerbottom">
              <div className="Screen">
              <SelectorWrapper>
              <Label>Screen</Label>
                  <SelectorInput
                    type="text"
                    placeholder="Select a screen"
                    onClick={handleScreenSelectorClick}
                    value={screenSelected ? screenSelected.label : ''}
                  />
                  {screenIsOpen && (
                    <SelectorDropdown isOpen={screenIsOpen}>
                      {screenOptions.map((screenOption) => (
                        <SelectorOption
                          key={screenOption.value}
                          onClick={() => handleScreenOptionClick(screenOption)}
                        >
                          {screenOption.label}
                        </SelectorOption>
                      ))}
                    </SelectorDropdown>
                  )}
                </SelectorWrapper>
              </div>
              <div className="Width flex space-x-1">
              <div>
              <InputWrapper>
              <Label>Width</Label>
                  <InputField
                    type="number"
                    min={0}
                    value={width}
                    onChange={handleInputChangewidth}
                    placeholder="0"
                  />
                </InputWrapper>
              </div>
              <div>
              <InputWrapper>
                  <InputField
                    type="number"
                    min={0}
                    value={widthd}
                    onChange={handleInputChangewidthd}
                    placeholder=".0"
                  />
                </InputWrapper>
              </div>
              <div>
              <SelectorWrapper>
                  <SelectorInput
                    type="text"
                    placeholder="Select a screen"
                    onClick={handleScreenSelectorClick}
                    value={screenSelected ? screenSelected.label : ''}
                  />
                  {screenIsOpen && (
                    <SelectorDropdown isOpen={screenIsOpen}>
                      {screenOptions.map((screenOption) => (
                        <SelectorOption
                          key={screenOption.value}
                          onClick={() => handleScreenOptionClick(screenOption)}
                        >
                          {screenOption.label}
                        </SelectorOption>
                      ))}
                    </SelectorDropdown>
                  )}
                </SelectorWrapper>
              </div>
              </div>
              <div className="Height">
              <div>
              <InputWrapper>
              <Label>Height</Label>
                  <InputField
                    type="number"
                    min={0}
                    value={height}
                    onChange={handleInputChangeheight}
                    placeholder="0"
                  />
                </InputWrapper>
              </div>
              <div>
              <InputWrapper>
              <InputField
                    type="number"
                    min={0}
                    value={'.decimal'}
                    onChange={handleInputChangeheightd}
                    placeholder=".decimal"
                  />
                </InputWrapper>
              </div>
              <div></div>
              </div>
            </div>
            
          </div>
                <div className='midle'>
                    <h4 style={{color:'#60707D',fontFamily: 'Raleway, sans-serif'}}>Glass</h4>
                </div>
                <div className="input-container">
        <div className="title-div">
          <Label>Glass Type</Label>
        </div>
        <div className="checkbox-div flex space-x-16" style={{marginLeft:'20px'}}> 
  {/* Main 1 Group */}
  <div className="checkbox-group flex space-x-16">
    <StepCheckbox>
      <input
        type="checkbox"
        id={`checkbox-main-1-1`}
        checked={selectedGlassTypeMain1 === 'Tempered'}
        onChange={() => handleSubCheckboxChangeMain1('Tempered')}
      />
      <label htmlFor={`checkbox-main-1-1`}>Tempered</label>
    </StepCheckbox>

    <StepCheckbox>
      <input
        type="checkbox"
        id={`checkbox-main-1-2`}
        checked={selectedGlassTypeMain1 === 'Half-Tempered'}
        onChange={() => handleSubCheckboxChangeMain1('Half-Tempered')}
      />
      <label htmlFor={`checkbox-main-1-2`}>Half-Tempered</label>
    </StepCheckbox>
  </div>
  {/* Main 2 Group */}
  <div className="checkbox-group flex space-x-16">
    <StepCheckbox>
      <input
        type="checkbox"
        id={`checkbox-main-2-1`}
        checked={selectedGlassTypeMain2 === 'Diamond'}
        onChange={() => handleSubCheckboxChangeMain2('Diamond')}
      />
      <label htmlFor={`checkbox-main-2-1`}>Diamond</label>
    </StepCheckbox>
    <StepCheckbox>
      <input
        type="checkbox"
        id={`checkbox-main-2-2`}
        checked={selectedGlassTypeMain2 === 'Half-Diamond'}
        onChange={() => handleSubCheckboxChangeMain2('Half-Diamond')}
      />
      <label htmlFor={`checkbox-main-2-2`}>Half-Diamond</label>
    </StepCheckbox>
  </div>

  {/* Main 3 Group */}
  <div className="checkbox-group flex space-x-16">
    <StepCheckbox>
      <input
        type="checkbox"
        id={`checkbox-main-3-1`}
        checked={selectedGlassTypeMain3 === 'Colonial'}
        onChange={() => handleSubCheckboxChangeMain3('Colonial')}
      />
      <label htmlFor={`checkbox-main-3-1`}>Colonial</label>
    </StepCheckbox>
    <StepCheckbox>
      <input
        type="checkbox"
        id={`checkbox-main-3-2`}
        checked={selectedGlassTypeMain3 === 'Half-Colonial'}
        onChange={() => handleSubCheckboxChangeMain3('Half-Colonial')}
      />
      <label htmlFor={`checkbox-main-3-2`}>Half-Colonial</label>
    </StepCheckbox>
  </div>
</div>
<div>
            
<div className="checkbox-div flex space-x-24" style={{marginLeft:'20px'}}>
              {[
                "Argon",
                "Low-E",
                "Triple Pane",
              ].map((label, index) => (
                <StepCheckbox key={index}>
                  <input type="checkbox" id={`checkbox-${index}`} />
                  <label htmlFor={`checkbox-${index}`} >{label}</label>
                </StepCheckbox>
              ))}
            </div>
          </div>
        </div>
        </div>
      </StepContent>
      <StepFooter>
        {currentStep > 1 && (
          <button onClick={previousStep} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Previous
          </button>
        )}
        {currentStep < 4 && (
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Next
          </button>
        )}
      </StepFooter>
    </StepContainer>
  );
};

const Step2: React.FC<{
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
}> = ({ currentStep, nextStep, previousStep }) => {
  return <div>Step 2 Content</div>;
};

const Step3: React.FC<{
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
}> = ({ currentStep, nextStep, previousStep }) => {
  return <div>Step 3 Content</div>;
};

const Step4: React.FC<{
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
}> = ({ currentStep, nextStep, previousStep }) => {
  return <div>Step 4 Content</div>;
};

export default OrderCustomization;
