import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SlotSelection = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {
  const [selectedDay, setSelectedDay] = React.useState(null);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const times = [
    '08 - 09 AM',
    '09 - 10 AM',
    '10 - 11 AM',
    '11 - 12 AM',
    '12 - 01 PM',
    '01 - 02 PM',
    '02 - 03 PM',
    '03 - 04 PM',
    '04 - 05 PM',
    '05 - 06 PM',
  ];

  return (
    <div style={{
      marginBottom: '24px'
    }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack
          sx={{
            padding: '20px',
            borderRadius: '16px',
            background: 'white',
          }}
          spacing={3}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography
              style={{
                color: 'var(--gray-900, #101828)',
                fontFamily: 'Inter',
                fontSize: isDesktop ? '30px' : '20px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: isDesktop ? '38px' : '30px',
              }}
            >
              Select a Slot
            </Typography>

            <DatePicker
              label=""
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              slotProps={{
                textField: {
                  style: {
                    backgroundColor: '#F7F7F7',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontFamily: 'KindSans',
                  },
                },
              }}
            />
          </Stack>
          <Typography
            sx={{
              color: 'var(--gray-900, #101828)',
              fontFamily: 'Inter',
              fontSize: isDesktop ? '20px' : '12px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '30px',
            }}
            component="span"
          >
            Select a date -{' '}
            <Typography
              sx={{
                color: 'var(--gray-400, #98A2B3)',
                fontFamily: 'Inter',
                fontSize: isDesktop ? '20px' : '12px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '30px',
              }}
              component="span"
            >
              {selectedDate.toLocaleString('default', {
                month: 'long',
              })}{' '}
              {selectedDate.getFullYear()}
            </Typography>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
            }}
          >
            {[...Array(7)].map((_, index) => (
              <Button
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                variant={selectedDay === index ? 'contained' : 'outlined'}
                sx={{
                  borderRadius: '16px',
                  border: '1px solid var(--primary-700, #884E1B)',
                  background:
                    selectedDay === index
                      ? 'var(--primary-600, #D77F33)'
                      : 'transparent',
                  width: '80px',
                }}
                onClick={() => setSelectedDay(index)}
              >
                <Typography
                  sx={{
                    color:
                      selectedDay === index
                        ? 'white'
                        : 'var(--gray-400, #98A2B3)',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '30px',
                  }}
                >
                  {
                    [
                      'SUN',
                      'MON',
                      'TUE',
                      'WED',
                      'THU',
                      'FRI',
                      'SAT',
                    ][
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        selectedDate.getDate() + index,
                      ).getDay()
                    ]
                  }

                  <Typography
                    sx={{
                      color:
                        selectedDay === index
                          ? 'white'
                          : 'var(--gray-900, #101828)',
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '30px',
                    }}
                  >
                    {selectedDate.getDate() + index}
                  </Typography>
                </Typography>
              </Button>
            ))}
          </Box>
        </Stack>
      </LocalizationProvider>
      <div style={{ height: '4px' }} />
      <Stack
        sx={{
          padding: '20px',
          borderRadius: '16px',
          background: 'white',
        }}
        spacing={3}
      >
        <Typography
          sx={{
            color: 'var(--gray-900, #101828)',
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '30px',
          }}
          component="span"
        >
          Select a date -{' '}
          <Typography
            sx={{
              color: 'var(--gray-400, #98A2B3)',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '30px',
            }}
            component="span"
          >
            {selectedDate.toLocaleString('default', {
              month: 'long',
            })}{' '}
            {selectedDate.getFullYear()}
          </Typography>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
          }}
        >
          {times.map((time, index) => (
            <Button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              variant={selectedTime === time ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '16px',
                border: '1px solid var(--primary-700, #884E1B)',
                background:
                  selectedTime === time
                    ? 'var(--primary-50, #D77F33)'
                    : 'transparent',
                width: '145px',
                padding: '12px 16px',
              }}
              onClick={() => setSelectedTime(time)}
            >
              <Typography
                sx={{
                  color:
                    selectedTime === time
                      ? 'white'
                      : 'var(--gray-900, #101828)',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '30px',
                }}
                component="span"
              >
                {time.slice(0, time.length - 2)}
                <Typography
                  sx={{
                    color:
                      selectedTime === time
                        ? 'white'
                        : 'var(--gray-400, #98A2B3)',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '30px',
                  }}
                  component="span"
                >
                  {time.slice(time.length - 2, time.length)}
                </Typography>
              </Typography>
            </Button>
          ))}
        </Box>
      </Stack>
    </div>
  );
};

SlotSelection.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  selectedTime: PropTypes.string,
  setSelectedTime: PropTypes.func.isRequired,
};

SlotSelection.defaultProps = {
  selectedTime: null,
};

export default SlotSelection;
