export interface QRSComplexResult {
    sensorId : string,
  measurement : number,
  timestamp : number,
  filtered_ecg : number,
  differentiated_ecg : number,
  squared_ecg : number,
  integrated_ecg : number,
  qrs_timestamp :number 
}