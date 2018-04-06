import React from 'react';
import { InputNumber } from 'antd';

const InputNumberRange = ({ startProps, endProps }) => {
    return (
        <div className="input-number-range">
            <InputNumber {...startProps} /> - <InputNumber {...endProps} />
        </div>
    );
};

export default InputNumberRange;