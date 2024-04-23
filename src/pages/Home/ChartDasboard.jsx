import { Box, FormControl, FormLabel, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const ChartDasboard = () => {
    const countries = ["New Signups", "Revenue", "Course Sales", "New Signups", "Active Students", "Lesson Completions", , "Course Completions", "Abandoned Cart Revenue"];

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const [options, setOptions] = useState({
        chart: {
            id: "apexchart-example"
        },
        xaxis: {
            categories: ['Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24', 'Apr 25', 'Apr 26']
        }
    })

    const [series, setSeries] = useState([{
        name: 'series',
        data: [1, 0, 0, 0, 0, 0, 0]
    }])

    return (
        <Box w="100%" h="80%" m={'3rem'} borderColor={'black'} alignContent={'center'} >
            <Box>
                <FormControl w='80%'>
                    <Select placeholder='Select country' value={selectedCountry} onChange={handleCountryChange}>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <Chart options={options} series={series} type="line" width={800} height={500} />
            </Box>
        </Box >

    )
}

export default ChartDasboard;
