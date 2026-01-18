# ApiResponseListOrderResponse

API 응답 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | 응답 코드 | [default to undefined]
**message** | **string** | 응답 메시지 | [default to undefined]
**data** | [**Array&lt;OrderResponse&gt;**](OrderResponse.md) | 응답 데이터 | [optional] [default to undefined]

## Example

```typescript
import { ApiResponseListOrderResponse } from './api';

const instance: ApiResponseListOrderResponse = {
    code,
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
