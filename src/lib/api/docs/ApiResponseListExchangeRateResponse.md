# ApiResponseListExchangeRateResponse

API 응답 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | 응답 코드 | [default to undefined]
**message** | **string** | 응답 메시지 | [default to undefined]
**data** | [**Array&lt;ExchangeRateResponse&gt;**](ExchangeRateResponse.md) | 응답 데이터 | [optional] [default to undefined]

## Example

```typescript
import { ApiResponseListExchangeRateResponse } from './api';

const instance: ApiResponseListExchangeRateResponse = {
    code,
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
