# ExchangeRateResponse

환율 응답 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchangeRateId** | **number** | 환율 ID | [default to undefined]
**currency** | **string** | 통화 | [default to undefined]
**rate** | **number** | 환율 | [default to undefined]
**changePercentage** | **number** | 변동률 | [default to undefined]
**applyDateTime** | **string** | 적용 일시 | [default to undefined]

## Example

```typescript
import { ExchangeRateResponse } from './api';

const instance: ExchangeRateResponse = {
    exchangeRateId,
    currency,
    rate,
    changePercentage,
    applyDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
