# WalletAPIApi

All URIs are relative to *https://exchange-example.switchflow.biz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWallets**](#getwallets) | **GET** /wallets | 지갑 조회|

# **getWallets**
> ApiResponseWalletSummaryResponse getWallets()

회원의 지갑을 조회합니다. 회원이 보유한 통화별 잔액을 반환합니다.

### Example

```typescript
import {
    WalletAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WalletAPIApi(configuration);

const { status, data } = await apiInstance.getWallets();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseWalletSummaryResponse**

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

