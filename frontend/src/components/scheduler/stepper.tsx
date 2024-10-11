import React, { useState, useEffect } from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectValues } from '../../states/stepper/slice';
import { StepButton } from '@mui/joy';
import { setNumber } from '../../states/stepper/slice';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import "./style.scss"
import { useLocation, useNavigate } from 'react-router-dom';


export default function CustStepper() {
    const select = useAppSelector(selectValues);
    const dispatch = useAppDispatch();
    const [steps, setSteps] = useState<JSX.Element[]>([])
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (steps.length === 0)
            getSteps();
    }, [])

    useEffect(() => {
        getSteps();
        
        let lastIndex = location.pathname.lastIndexOf('/');
        let strippedUrl = location.pathname.substring(0, lastIndex + 1);
        switch (select.number) {
            case 0:
                navigate(`${strippedUrl}services`);
                break;
            case 1:
                navigate(`${strippedUrl}calendar`);
                break;
            case 2:
                navigate(`${strippedUrl}confirm`);
                break;
        }
      
    }, [select.number])

    const getColor = (isActive: boolean, isComplete: boolean, isDisabled: boolean) => {
        if (isActive)
            return "primary"
        if (isComplete)
            return "success"
        if (isDisabled)
            return "neutral"
    }

    const handlerClick = (i: number) => {
        dispatch(setNumber(i));
    }

    const getSteps = () => {
        const result: JSX.Element[] = []
        for (let i = 0; i < select.countSteps; i++) {
            let isActive = select.number == i ? true : false;
            let isComplete = select.number > i ? true : false;
            let isDisabled = select.number < i ? true : false;
            result.push(<Step
                key={`step_${i}`}
                disabled={isDisabled}
                active={isActive}
                completed={isComplete}
                orientation="vertical"
                indicator={

                    <StepButton onClick={() => handlerClick(i)}                    >
                        <StepIndicator
                            variant={isDisabled ? "outlined" : "solid"}
                            color={getColor(isActive, isComplete, isDisabled)}
                        >                          
                            {
                                isComplete
                                ?
                                <CheckRoundedIcon sx={{color:"white"}}/>
                                :
                                getIcon(i)
                            }  
                            {/* {getIcon(i)} */}
                        </StepIndicator>
                    </StepButton>

                }
            />)
        }
        setSteps(result);
    }

    const getIcon = (i: number) => {
        switch (i) {
            case 0:
                return <AddTaskIcon />
            case 1:
                return <CalendarMonthIcon />
            case 2:
                return <SaveAsIcon />
        }

    }

    return (
        <Stepper

            size="lg"
            sx={{
                top: 0,
                width: '100%',
                '--StepIndicator-size': '3rem',
                '--Step-connectorInset': '0px',
                [`& .${stepIndicatorClasses.root}`]: {
                    borderWidth: 4,
                },
                [`& .${stepClasses.root}::after`]: {
                    height: 4,
                },
                [`& .${stepClasses.completed}`]: {
                    [`& .${stepIndicatorClasses.root}`]: {
                        borderColor: 'primary.300',
                        color: 'primary.300',
                    },
                    '&::after': {
                        bgcolor: 'primary.300',
                    },
                },
                [`& .${stepClasses.active}`]: {
                    [`& .${stepIndicatorClasses.root}`]: {
                        borderColor: 'currentColor',
                    },
                },
                [`& .${stepClasses.disabled} *`]: {
                    color: 'neutral.outlinedDisabledColor',
                },
            }}
        >
            {steps}
        </Stepper>
    )
}