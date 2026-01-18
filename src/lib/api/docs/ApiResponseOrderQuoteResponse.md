# ApiResponseOrderQuoteResponse

API 응답 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | 응답 코드 | [default to undefined]
**message** | **string** | 응답 메시지 | [default to undefined]
**data** | [**OrderQuoteResponse**](OrderQuoteResponse.md) | 응답 데이터 | [optional] [default to undefined]

## Example

```typescript
import { ApiResponseOrderQuoteResponse } from './api';

const instance: ApiResponseOrderQuoteResponse = {
    code,
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
