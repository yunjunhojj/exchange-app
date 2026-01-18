# OrderResponse

환전 주문 응답 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | 주문 ID | [default to undefined]
**fromCurrency** | **string** | 매수 통화 | [default to undefined]
**fromAmount** | **number** | 매수 금액 | [default to undefined]
**toCurrency** | **string** | 매도 통화 | [default to undefined]
**toAmount** | **number** | 매도 금액 | [default to undefined]
**appliedRate** | **number** | 적용된 환율 | [default to undefined]
**orderedAt** | **string** | 주문 생성 시간 | [default to undefined]

## Example

```typescript
import { OrderResponse } from './api';

const instance: OrderResponse = {
    orderId,
    fromCurrency,
    fromAmount,
    toCurrency,
    toAmount,
    appliedRate,
    orderedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
