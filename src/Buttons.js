import { Radio, RadioGroupField, SliderField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export const ProductButton = () => (
  <RadioGroupField  size="large" label="Crediting Type" name="ProductType" defaultValue="IUL">
    <Radio value="IUL">Indexed</Radio>
    <Radio value="VUL">Variable</Radio>
  </RadioGroupField>
);

export const RiskClass = () => (
    <RadioGroupField  size="large" label="Risk Class" name="RiskClass" defaultValue="1">
      <Radio value="1">Preferred Best NS</Radio>
      <Radio value="2">Preferered NS</Radio>
      <Radio value="3">Standard Plus</Radio>
      <Radio value="4">Standard NS</Radio>
    </RadioGroupField>
  );

  export const Sex = () => (
    <RadioGroupField  size="large" label="Insured Sex" name="InsuredSex" defaultValue="1">
      <Radio value="1">Male</Radio>
      <Radio value="2">Female</Radio>
    </RadioGroupField>
  );

  export const Smoker = () => (
    <RadioGroupField  size="large" label="Tobacco Use" name="InsuredSm" defaultValue="1">
      <Radio value="1">No Tobacco</Radio>
      <Radio value="2">Uses Tobacco</Radio>
    </RadioGroupField>
  );
  
  export const ChargeDial = () => {
  return ( 
  <SliderField 
    label="Overall Charge Factor" 
    min={0}
    max={200}
    step={5}
    defaultValue={100}
    />
  )
}
export const EarlyDial = () => {
  return (
    <SliderField
    label="Early Charge Factor" 
    min={0}
    max={200}
    step={5}
    defaultValue={100}
    />
  )
}

export const LateDial = () => {
  return (
    <SliderField 
    label="Late Charge Factor" 
    min={0}
    max={200}
    step={5}
    defaultValue={100}
    />
  )
}