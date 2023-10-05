import { useForm, SubmitHandler } from "react-hook-form"
import styled from 'styled-components'; 
import tw from 'twin.macro';

interface IFormInput {
  firstName: string
  lastName: string
  age: number
}

const SignInWrapper = styled.form`
  ${tw`flex flex-col`}
  .input-label {
    margin-left: 5%;
    margin-top: 20px;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: normal;
    color: #cbcbc9
  }  

  .other-label {
    font-size: 14px;
    margin-left: 8px;
    color: #60707D;
  }

  .reset-label {
    color: #60707D;
    font-size: 14px;
    font-weight: 600;
    margin-left: 8px;

    &:hover {
      color: #73C7FC;
    }
  }

  .form-control {
    display: block;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 30px;
    font-weight: 400;
    color: #3f4254;
    background-color: #fff;
    border: 1px solid #e4e6ef;
    border-radius: 4px;
    box-shadow: none;
    padding-left: 10px;
    padding-right: 10px;
  }

  .submit {
    text-transform: uppercase;
    width: 160px;
    height: 50px;
    margin: auto;
    border-radius: 25px;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 16px;
    background-color: #73C7FC;
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
        background-color: #fff; 
        color: #73C7FC;
        border: 1px solid #73C7FC;
    }
  }
`;


const SignUpForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <SignInWrapper onSubmit={handleSubmit(onSubmit)}>
      <label className="input-label">E-MAIL</label>
      <input className="form-control" {...register("firstName", { required: true, maxLength: 20 })} />
      <label className="input-label">FULL NAME</label>
      <input className="form-control" {...register("firstName", { required: true, maxLength: 20 })} />
      <label className="input-label">PASSWORD</label>
      <input className="form-control" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <label className="input-label">RETYPE PASSWORD</label>
      <input className="form-control" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <div className="flex flex-row justify-between">
        
        
      </div>
      <input className="submit" type="submit" value={"sign up"} />
  </SignInWrapper>
  );
}

export default SignUpForm;