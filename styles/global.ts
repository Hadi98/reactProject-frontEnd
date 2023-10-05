import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyle = createGlobalStyle`

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

h1, h2 {
  font-family: 'Poppins-ExtraBold', sans-serif;
}

/* Define the custom blue background color */
.bg-custom-blue {
  background-color: rgb(184, 198, 199)
}

/* Define the custom blue text color */
.text-custom-blue {
  color: rgb(235, 100, 64);
}

/* Define the custom blue border color */
.border-custom-blue {
  border-color: rgb(0, 174, 236);
}

input:focus {
  outline: none;
  border: none;
}

.button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 30px;
  border: none;
  overflow: hidden;
  background: rgb(235, 100, 64);
  color: #fff;
}

.button-text {
  transform: translateX(15px);
  font-size: 1.0em;
  font-weight: 700;
  transition-duration: 0.3s;
  font-family: 'Poppins-light';
}

.iconer {
  transform: translateY(40px);
  transition-duration: 0.3s;
}

.button:hover .button-text {
  transform: translateX(0px);
}

.button:hover .iconer {
  transform: translateY(0px);
}

.extremely-rounded {
  border-radius: 100%;
}


/* Styles for mobile view */
@media (max-width: 768px) {

  .tab-button {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  .tab-content {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .fixed-header {
    height: 60px;
  }

  /* Adjust the font size for mobile */
  .text-4xl {
    font-size: 2rem;
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  /* Adjust padding for mobile */
  .p-4 {
    padding: 10px;
  }

  /* Adjust margin for mobile */
  .mt-40 {
    margin-top: 20px;
  }

  .pb-50{
    padding-bottom: 200px;
  }

  .pt-50{
    padding-top: 10%;
  }

  .width-100{
    width: 100%;
  }

  .width-200{
    width: 90%;
  }
   /* Adjust the size of input fields */
   input[type="text"] {
    width: 100%;
    height: 40px;
    
    border-radius: 35px;
  }
  
  /* Add more mobile-specific styles here as needed */
}


@media (max-width: 345px) {
  .width-200{
    width: 80%;
  }
  
}

`;
