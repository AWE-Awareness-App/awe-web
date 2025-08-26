# AuthApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authLoginPost**](#authloginpost) | **POST** /auth/login | Login user (requires email verification)|
|[**authRegisterPost**](#authregisterpost) | **POST** /auth/register | Register a new user|
|[**authResendVerificationPost**](#authresendverificationpost) | **POST** /auth/resend-verification | Resend email verification token|
|[**authValidateGet**](#authvalidateget) | **GET** /auth/validate | Validate authentication token|
|[**authVerifyEmailPost**](#authverifyemailpost) | **POST** /auth/verify-email | Verify email using verification token|

# **authLoginPost**
> AuthResponse authLoginPost(loginRequest)

Authenticates a user. Login will fail with 401 if email is not verified.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.authLoginPost(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |
|**400** | Invalid credentials |  -  |
|**401** | Email not verified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRegisterPost**
> AuthResponse authRegisterPost(registerRequest)

Creates a new user account and sends an email verification token. Users must verify their email before logging in.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    RegisterRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let registerRequest: RegisterRequest; //

const { status, data } = await apiInstance.authRegisterPost(
    registerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerRequest** | **RegisterRequest**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User registered successfully |  -  |
|**400** | Invalid input or user already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authResendVerificationPost**
> SuccessResponse authResendVerificationPost(resendVerificationRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    ResendVerificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let resendVerificationRequest: ResendVerificationRequest; //

const { status, data } = await apiInstance.authResendVerificationPost(
    resendVerificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resendVerificationRequest** | **ResendVerificationRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Verification email sent or email already verified |  -  |
|**400** | Email is required |  -  |
|**500** | Failed to resend verification email |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authValidateGet**
> ValidationResponse authValidateGet()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authValidateGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ValidationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Token is valid |  -  |
|**401** | Unauthorized or invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authVerifyEmailPost**
> SuccessResponse authVerifyEmailPost(verifyEmailRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    VerifyEmailRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let verifyEmailRequest: VerifyEmailRequest; //

const { status, data } = await apiInstance.authVerifyEmailPost(
    verifyEmailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyEmailRequest** | **VerifyEmailRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email verified successfully |  -  |
|**400** | Token expired or invalid request |  -  |
|**404** | Invalid token |  -  |
|**500** | Email verification failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

