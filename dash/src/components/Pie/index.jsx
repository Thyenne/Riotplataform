import { ResponsivePieCanvas } from '@nivo/pie'
import { StyledPieChart } from './styles';


const PieChart = ({ data }) => (
    <ResponsivePieCanvas
        data={data}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'loss'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'wins'
                },
                id: 'dots'
            },
            
        ]}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 60,
                itemHeight: 14,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 14,
                symbolShape: 'circle'
            }
        ]}
    />
)
export {PieChart};