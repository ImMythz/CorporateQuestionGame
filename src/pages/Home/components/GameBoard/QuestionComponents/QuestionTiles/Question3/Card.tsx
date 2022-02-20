import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer, setColor, clearTile } from '../../../../../../../redux/question3';
import questions from '../../../../../../../questions.json'

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
    const { answer } = useSelector((state: any) => state.question3);
    const dispatch = useDispatch()


    const submitAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const answerText = document.getElementById('answerText') as HTMLInputElement;
        dispatch(setColor())
        dispatch(setAnswer(answerText.value));
        // const history = useNavigate();
        // history('/');
    }

    const Tile = () => {
        dispatch(clearTile());
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 'auto' }}>
            <Box 
                display="flex"
                alignItems="center"
                justifyContent="center">
                <CardContent>
                    <Typography sx={{ fontSize: 22, mt: 3}} color="text.primary" gutterBottom>
                    {questions[0].question}
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
            <Box
            display="flex"
            justifyContent="flex-end"
            sx={{
                '& > :not(style)': { mr: 3, mb: 3 },
            }}
            >
            <CardActions>
                <Button 
                    className='!text-blue' 
                    size="small"
                    onClick={Tile}
                    >Clear</Button>
            </CardActions>
            </Box>
        </Card>
    );
}
