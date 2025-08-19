# AuthResponseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the user | [optional] [default to undefined]
**email** | **string** | User\&#39;s email address | [optional] [default to undefined]
**firstName** | **string** | User\&#39;s first name | [optional] [default to undefined]
**lastName** | **string** | User\&#39;s last name | [optional] [default to undefined]
**role** | **string** | User\&#39;s role | [optional] [default to undefined]
**isCounsellor** | **boolean** | Whether the user is a counsellor | [optional] [default to undefined]
**profileImageUrl** | **string** | URL to the user\&#39;s profile image | [optional] [default to undefined]

## Example

```typescript
import { AuthResponseUser } from './api';

const instance: AuthResponseUser = {
    id,
    email,
    firstName,
    lastName,
    role,
    isCounsellor,
    profileImageUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
