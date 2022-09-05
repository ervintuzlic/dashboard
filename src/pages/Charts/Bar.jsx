import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, BarSeries, DataLabel, ColumnSeries,
  Inject, Category,Legend, Tooltip} from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider';

import {Header} from '../../components';

const Bar = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Bar" title="Inflation Rate in Bar"/>
    <ChartComponent id="charts" height="420px" primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis}
    chartArea={{border:{width:0}}} tooltip={{enable:true}} background={currentMode==='Dark' ? '#33373E' : '#fff'} legendSettings={{background:'white'}}>
      <Inject services={[BarSeries, ColumnSeries, Category, Legend, Tooltip, DataLabel]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Bar
