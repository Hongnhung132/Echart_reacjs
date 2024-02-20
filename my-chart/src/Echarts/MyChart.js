import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const MyChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    // Khởi tạo biểu đồ khi component được render
    const chart = echarts.init(chartContainer.current);

    // Dữ liệu cho biểu đồ cột
    const data = [120, 200, 150, 80, 70];

    // Cấu hình biểu đồ
    const options = {
      title: {
        text: 'Biểu đồ cột đơn giản',
      },
      xAxis: {
        type: 'category',
        data: ['Dữ liệu 1', 'Dữ liệu 2', 'Dữ liệu 3', 'Dữ liệu 4', 'Dữ liệu 5'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: data,
          type: 'bar',
        },
      ],
    };

    // Đặt cấu hình cho biểu đồ
    chart.setOption(options);

    // Làm sạch biểu đồ khi component bị hủy
    return () => {
      chart.dispose();
    };
  }, []); // Chỉ gọi useEffect khi component được render lần đầu

  return <div ref={chartContainer} style={{ width: '100%', height: '400px' }}></div>;
};

export default MyChart;
