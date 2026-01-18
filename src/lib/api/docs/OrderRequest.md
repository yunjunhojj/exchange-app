# OrderRequest

환전 주문 요청 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchangeRateId** | **number** | 환율 ID | [default to undefined]
**fromCurrency** | **string** | 매수 통화 | [default to undefined]
**toCurrency** | **string** | 매도 통화 | [default to undefined]
**forexAmount** | **number** | 주문 금액 | [default to undefined]

## Example

```typescript
import { OrderRequest } from './api';

const instance: OrderRequest = {
    exchangeRateId,
    fromCurrency,
    toCurrency,
    forexAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
