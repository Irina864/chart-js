import './App.css';
import { Chart } from 'react-google-charts';
const options = {
    title: 'Internet sites usability',
};
function App() {
    return (
        <div className="App">
            <Chart
                chartType="PieChart"
                options={options}
                data={[
                    ['Place', 'millions of people'],
                    ['Yandex', 100.2],
                    ['Google', 99.61],
                    ['YouTube', 96.52],
                    ['WhatsApp', 95.98],
                    ['Vk', 90.6],
                    ['Telegram', 84.84],
                ]}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    );
}

export default App;
