# AuthAPIApi

All URIs are relative to *https://exchange-example.switchflow.biz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**login**](#login) | **POST** /auth/login | 로그인|

# **login**
> ApiResponseTokenResponse login()

         이메일로 로그인합니다.         - 회원이 존재하지 않으면 새로 등록합니다.         - 회원이 존재하면 해당 회원으로 로그인합니다.         - 최초 로그인 시 회원의 지갑이 생성됩니다. 잔액은 KRW: 1,000,000 / USD: O / JPY: 0 으로 초기화됩니다.         - 로그인 성공 시 JWT 인증 토큰을 반환합니다.     

### Example

```typescript
import {
    AuthAPIApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthAPIApi(configuration);

let request: LoginRequest; // (default to undefined)

const { status, data } = await apiInstance.login(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **LoginRequest** |  | defaults to undefined|


### Return type

**ApiResponseTokenResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

