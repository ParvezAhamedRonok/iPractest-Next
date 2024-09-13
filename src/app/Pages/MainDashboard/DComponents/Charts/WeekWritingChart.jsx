/**
 * Sample for multiple axis
 */
import * as React from "react";
import { WritingArray } from '../../data/LineChartData';
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, LineSeries, ChartAnnotation, ColumnSeries, AnnotationsDirective, AnnotationDirective, Category, Tooltip, SplineSeries } from '@syncfusion/ej2-react-charts';
import moment from "moment";

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const WeekWritingChart = () => {
  
  var firstDay = new Date();
  var Day1 = new Date(firstDay.getTime() - 0 * 24 * 60 * 60 * 1000);
  var Day2 = new Date(firstDay.getTime() - 1 * 24 * 60 * 60 * 1000);
  var Day3 = new Date(firstDay.getTime() - 2 * 24 * 60 * 60 * 1000);
  var Day4 = new Date(firstDay.getTime() - 3 * 24 * 60 * 60 * 1000);
  var Day5 = new Date(firstDay.getTime() - 4 * 24 * 60 * 60 * 1000);
  var Day6 = new Date(firstDay.getTime() - 5 * 24 * 60 * 60 * 1000);
  var Day7 = new Date(firstDay.getTime() - 6 * 24 * 60 * 60 * 1000);
 
  let data1 = [
    { 
      x: moment.utc(Day7).format('dddd'),
       y: 0
     },
    { 
      x: moment.utc(Day6).format('dddd'),
       y: 0
     },
     { 
      x: moment.utc(Day5).format('dddd'),
       y: 0
     },
    { 
      x: moment.utc(Day4).format('dddd'),
       y: 0
     },
     { 
      x: moment.utc(Day3).format('dddd'),
       y: 0
     },
    { 
      x: moment.utc(Day2).format('dddd'),
       y: 0
     },
     { 
      x: moment.utc(Day1).format('dddd'),
       y: 0
     },
  ];

  const WeekWritingLinePrimaryYAxis = {
    labelFormat: '{value}',
    rangePadding: 'None',
    minimum: 0,
    maximum: 9,
    interval: 1,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },

  };
  // data1[0].y = 2
  // data1[1].y = 5
  // data1[2].y = 9
  // data1[3].y = 4



  // console.log(WritingArray)

  console.log(Day1)
  var thisDay = moment.utc(Day1).format('YYYY/MM/DD');
  var lastDay1 = moment.utc(Day2).format('YYYY/MM/DD')
  var lastDay2 = moment.utc(Day3).format('YYYY/MM/DD')
  var lastDay3 = moment.utc(Day4).format('YYYY/MM/DD')
  var lastDay4 = moment.utc(Day5).format('YYYY/MM/DD')
  var lastDay5 = moment.utc(Day6).format('YYYY/MM/DD')
  var lastDay6 = moment.utc(Day7).format('YYYY/MM/DD')
  // console.log(moment.utc(previousweek).format('YYYY/MM/DD'))
  // console.log(moment.utc(previousweek).format('dddd'))
  // console.log(moment.utc(firstDay).format('dddd'))
  // console.log(moment.utc(firstDay).format('YYYY/MM/DD'))
  // let firstDayMain = moment.utc(thisFirstDay).format('YYYY/MM/DD')
  // let main = WritingArray.filter((w) => w.x == '2023/12/07');
  let pushDay1 = WritingArray.filter((w) => w.x == thisDay);
  let pushDay2 = WritingArray.filter((w) => w.x == lastDay1);
  let pushDay3 = WritingArray.filter((w) => w.x == lastDay2);
  let pushDay4 = WritingArray.filter((w) => w.x == lastDay3);
  let pushDay5 = WritingArray.filter((w) => w.x == lastDay4);
  let pushDay6 = WritingArray.filter((w) => w.x == lastDay5);
  let pushDay7 = WritingArray.filter((w) => w.x == lastDay6);
  pushDay7.map((x) => {
    let mainX = {
      x: moment.utc(x.x).format('dddd'),
      y: x.y
    };
    data1[0].y = mainX.y
  })
  pushDay6.map((x) => {
    let mainX = {
      x: moment.utc(x.x).format('dddd'),
      y: x.y
    };
    data1[1].y = mainX.y
  })
  pushDay5.map((x) => {
    let mainX = {
      x: moment.utc(x.x).format('dddd'),
      y: x.y
    };
    // data1.push(mainX)
    data1[2].y = mainX.y
  })
  pushDay4.map((x) => {
    let mainX = {
      x: moment.utc(x.x).format('dddd'),
      y: x.y
    };
    // data1.push(mainX)
    data1[3].y = mainX.y
  })
  pushDay3.map((x) => {
    let mainX = {
      x: moment.utc(x.x).format('dddd'),
      y: x.y
    };
    data1[4].y = mainX.y
  })
  pushDay2.map((x) => {
    let mainX = {
      x: moment.utc(x.x).format('dddd'),
      y: x.y
    };
    data1[5].y = mainX.y
  })

  pushDay1.map((x) => {
    let mainX = {
      x: moment.utc(x.x).format('dddd'),
      y: x.y
    };
    data1[6].y = mainX.y
    // console.log(typeof x.x);
    // console.log(x.x);
    // console.log(mainX.x)
  })



  return (
    <div className='control-pane'>
      <style>{SAMPLE_CSS}</style>
      <div className='control-section'>
        <ChartComponent id='charts-3' style={{ textAlign: "center",borderRadius:"25px",border:"2px solid blue" }}
          primaryXAxis={{ valueType: 'Category', minorGridLines: { width: 0 }, majorGridLines: { width: 0 } }}
          primaryYAxis={WeekWritingLinePrimaryYAxis}
          // width={Browser.isDevice ? '100%' : '35%'}
          // width={'30%'}
          height={'55%'}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ visible: false }}
          title='Writing weekly performance'
          tooltip={{ enable: true }}
        // background={"blue"}
        >
          <Inject services={[LineSeries, ColumnSeries, Category, Tooltip, SplineSeries, ChartAnnotation]} />
          <AxesDirective>
            <AxisDirective majorGridLines={{ width: 0 }} rowIndex={0} opposedPosition={true} lineStyle={{ width: 0 }} minimum={24} maximum={36} interval={2} majorTickLines={{ width: 0 }} name='yAxis1' labelFormat='{value}°C' />
          </AxesDirective>
          {/* <AnnotationsDirective>
          <AnnotationDirective content='<div id="chart_cloud"><img src="src/chart/images/cloud.png"  style={{width: "41px"; height: "41px"}}/></div>' x='Sun' y={62} coordinateUnits='Point' verticalAlignment='Top' />
          <AnnotationDirective content='<div id="chart_cloud"><img src="src/chart/images/sunny.png"  style={{width: "41px"; height: "41px"}}/></div>' x='Sat' y={35} coordinateUnits='Point' yAxisName='yAxis1' />
        </AnnotationsDirective> */}
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={data1} xName='x' yName='y' width={2} name='Writing' type='Column' marker={{ visible: true, width: 7, height: 7 }} />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>

  )
};
export default WeekWritingChart;
