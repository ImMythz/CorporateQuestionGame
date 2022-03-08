import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer, setColor, clearTile } from '../../../../../../../redux/question2';
import questions from '../../../../../../../questions.json'
import { setThing } from '../../../../../../../redux/modal';

const theme = createTheme({
    palette: {
        primary: {
        main: '#81d4fa',
        },
        secondary: {
            main: '#c2e6f9',
        }
    },
}); 

export default function BasicCard() {
    const { answer } = useSelector((state: any) => state.question2);
    const dispatch = useDispatch()


    const submitAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const answerText = document.getElementById('answerText') as HTMLInputElement;
        dispatch(setColor())
        dispatch(setAnswer(answerText.value));
    }

    return (
        <Box 
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="!rounded"
        >
            <CardContent>
                <Typography sx={{ fontSize: 22, mt: 3}} color="text.primary" gutterBottom>
                {questions[1].question}
                </Typography>
                <ThemeProvider theme={theme}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        onSubmit={submitAnswer}
                        >
                        <TextField placeholder={answer} variant="standard" id='answerText' type='text'></TextField>
                    </Box>
                </ThemeProvider>
            </CardContent>
        </Box>
    );
}
