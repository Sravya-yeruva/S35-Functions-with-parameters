import React, { useReducer, useRef } from "react";

function MarkSheet() {
  let FirstNameInputRef = useRef();
  let LastNameInputRef = useRef();
  let TelMarksInputRef = useRef();
  let HinMarksInputRef = useRef();
  let EngMarksInputRef = useRef();
  let MatMarksInputRef = useRef();
  let SciMarksInputRef = useRef();
  let SocMarksInputRef = useRef();

  let ResultLabelRef = useRef();

  let TelMarksResultRef = useRef();
  let HinMarksResultRef = useRef();
  let EngMarksResultRef = useRef();
  let MatMarksResultRef = useRef();
  let SciMarksResultRef = useRef();
  let SocMarksResultRef = useRef();

  let CalculateResult = () => {
    let FirstName = FirstNameInputRef.current.value;
    let LastName = LastNameInputRef.current.value;
    let TelMarks = Number(TelMarksInputRef.current.value);
    let HinMarks = Number(HinMarksInputRef.current.value);
    let EngMarks = Number(EngMarksInputRef.current.value);
    let MatMarks = Number(MatMarksInputRef.current.value);
    let SciMarks = Number(SciMarksInputRef.current.value);
    let SocMarks = Number(SocMarksInputRef.current.value);

    let TotalMarks =
      TelMarks + HinMarks + EngMarks + MatMarks + SciMarks + SocMarks;

    ResultLabelRef.current.innerHTML = `${FirstName} ${LastName} Got Toatl Marks ${TotalMarks}`;

    alert(TotalMarks);
  };

  let inputonFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "yellow";
  };

  let inputonChange = (inputRef, resultRef) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 100) {
      if (inputRef.current.value >= 35) {
        resultRef.current.innerHTML = "pass 😃";
        resultRef.current.style.backgroundColor = "green";
      } else {
        resultRef.current.innerHTML = "Fail 😔";
        resultRef.current.style.backgroundColor = "red";
      }
    } else {
      resultRef.current.innerHTML = "Invalid 🙆";
      resultRef.current.style.backgroundColor = "brown";
    }
  };

  let inputonBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "pink";
  };

  return (
    <div>
      <h1 class="headingH">Student MarkSheet</h1>
      <hr></hr>
      <form>
        <fieldset>
          <legend>Please Enter Your Details</legend>
        </fieldset>
        <fieldset>
          <div>
            <label>First Name:</label>
            <input type="text" ref={FirstNameInputRef}></input>
            <label></label>
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" ref={LastNameInputRef}></input>
            <label></label>
          </div>
        </fieldset>
        <h2 class="head2">Student Subject Wise Marks</h2>
        <div>
          <label>Telugu Marks:</label>
          <input
            type="number"
            ref={TelMarksInputRef}
            onFocus={() => {
              inputonFocus(TelMarksInputRef);
            }}
            onChange={() => {
              inputonChange(TelMarksInputRef, TelMarksResultRef);
            }}
            onBlur={() => {
              inputonBlur(TelMarksInputRef);
            }}
          ></input>
          <label ref={TelMarksResultRef}></label>
        </div>
        <div>
          <label>Hindi Marks:</label>
          <input
            type="number"
            ref={HinMarksInputRef}
            onFocus={() => {
              inputonFocus(HinMarksInputRef);
            }}
            onChange={() => {
              inputonChange(HinMarksInputRef, HinMarksResultRef);
            }}
            onBlur={() => {
              inputonBlur(HinMarksInputRef);
            }}
          ></input>
          <label ref={HinMarksResultRef}></label>
        </div>
        <div>
          <label>English Marks:</label>
          <input
            type="number"
            ref={EngMarksInputRef}
            onFocus={() => {
              inputonFocus(EngMarksInputRef);
            }}
            onChange={() => {
              inputonChange(EngMarksInputRef, EngMarksResultRef);
            }}
            onBlur={() => {
              inputonBlur(EngMarksInputRef);
            }}
          ></input>
          <label ref={EngMarksResultRef}></label>
        </div>
        <div>
          <label>Maths Marks:</label>
          <input
            type="number"
            ref={MatMarksInputRef}
            onFocus={() => {
              inputonFocus(MatMarksInputRef);
            }}
            onChange={() => {
              inputonChange(MatMarksInputRef, MatMarksResultRef);
            }}
            onBlur={() => {
              inputonBlur(MatMarksInputRef);
            }}
          ></input>
          <label ref={MatMarksResultRef}></label>
        </div>
        <div>
          <label>Science Marks:</label>
          <input
            type="number"
            ref={SciMarksInputRef}
            onFocus={() => {
              inputonFocus(SciMarksInputRef);
            }}
            onChange={() => {
              inputonChange(SciMarksInputRef, SciMarksResultRef);
            }}
            onBlur={() => {
              inputonBlur(SciMarksInputRef);
            }}
          ></input>
          <label ref={SciMarksResultRef}></label>
        </div>
        <div>
          <label>Social Marks:</label>
          <input
            type="number"
            ref={SocMarksInputRef}
            onFocus={() => {
              inputonFocus(SocMarksInputRef);
            }}
            onChange={() => {
              inputonChange(SocMarksInputRef, SocMarksResultRef);
            }}
            onBlur={() => {
              inputonBlur(SocMarksInputRef);
            }}
          ></input>
          <label ref={SocMarksResultRef}></label>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              CalculateResult();
            }}
          >
            Calculate
          </button>
        </div>
        <div>
          <label style={{ width: "500px" }} ref={ResultLabelRef}>
            Total Result of a Student
          </label>
        </div>
      </form>
    </div>
  );
}

export default MarkSheet;
