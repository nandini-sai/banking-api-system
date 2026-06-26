# Banking API System 🏦

An **Apigee Edge API Proxy** implementing secure banking operations including account creation, balance management, transactions, and account deletion. The project leverages **OAuth 2.0, Basic Authentication, Key Value Maps (KVM), Response Caching, and custom JavaScript policies** to build a secure and scalable banking API.

---

## 🚀 Features

* Account creation, validation, and deletion
* Balance retrieval and updates with response caching
* Transaction processing with validation
* Dual authentication using OAuth 2.0 and Basic Auth
* API Key verification
* Per-user rate limiting (Quota)
* Admin-only operations using role validation
* Response caching for optimized balance lookups
* KVM-based persistent account storage
* **8 custom JavaScript resources for request parsing, validation, and business logic**

---

## 🏗️ Architecture

```text
Client
   │
   ▼
Apigee Proxy (/nandinibanking/v)
   │
   ├── Verify API Key
   ├── OAuth 2.0
   ├── Basic Authentication
   ├── Quota Enforcement
   ├── JavaScript Policies
   ├── KVM Storage
   ├── Response Cache
   ├── Validation
   └── Fault Handling
   │
   ▼
Backend
```

---

## 🛠️ Tech Stack

| Technology                          | Usage                                          |
| ----------------------------------- | ---------------------------------------------- |
| Google Apigee Edge                  | API Gateway                                    |
| REST / JSON                         | API Communication                              |
| OAuth 2.0                           | Authentication                                 |
| Basic Authentication                | User Authentication                            |
| API Key Verification                | Client Validation                              |
| Key Value Maps (KVM)                | Persistent Storage                             |
| Response Cache                      | Performance Optimization                       |
| **JavaScript (Apigee JS Policies)** | Custom parsing, validation, and business logic |

---

## 🔐 Security Policies

| Policy                  | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| Verify-API-Key          | Validates incoming API keys              |
| OAuth-GenerateToken     | Issues OAuth 2.0 access tokens           |
| OAuth-VerifyAccessToken | Validates bearer tokens                  |
| Basic-Auth-Decode       | Decodes Basic Authentication credentials |
| KVM-GetUserPassword     | Retrieves stored credentials             |
| Quota-User1             | Enforces per-user rate limits            |
| RaiseFault-Not Admin    | Restricts admin-only operations          |

---

## 💻 Custom JavaScript Resources

The API proxy includes **8 JavaScript resources** to implement custom business logic beyond built-in Apigee policies.

| Script             | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| ExtractUsername.js | Extracts username from the Basic Auth header    |
| ParseAcc.js        | Parses account details from request/response    |
| ParseAccBalance.js | Extracts account balance from KVM responses     |
| TxnUpdate.js       | Updates transaction details                     |
| ValidateAccNum.js  | Validates account number format                 |
| ValidateFlag.js    | Validates debit/credit operation flags          |
| creatAcc.js        | Builds payload for new account creation         |
| validateBalance.js | Validates transaction balance before processing |

---

## 📦 Operational Policies

### Account Creation

* createAcc
* Assign-AccCreated
* KVM-Save-New-Account
* EV-CreateAccount

### Validation

* ValidateAccNum
* ValidateFlag
* Assign-ValidBalance
* Assign-ValidAccNum

### Balance Caching

* Lookup-Cache-Balance
* Populate-Cache-Balance
* Invalidate-Cache-Balance
* FetchBalanceKVM

### Transactions

* TxnUpdate
* TxnUpdateKVM
* ParseAccBalance

### Account Deletion

* KVM-Delete
* Assign-DeleteMessage

### Fault Handling

* 10+ RaiseFault policies for detailed client error responses

---

## 📡 API Base Path

```text
/nandinibanking/v
```

---

## 🔧 Deployment

### 1. Clone the repository

```bash
git clone https://github.com/nandini-sai/banking-api-system.git
```

### 2. Zip the proxy bundle

```bash
zip -r NandiniApigeeUserCase1.zip apiproxy/
```

### 3. Import into Apigee

Using the Apigee UI:

* Develop
* API Proxies
* Upload Bundle

Or using the CLI:

```bash
apigeecli apis create bundle -f NandiniApigeeUserCase1.zip -o <org> -t <token>
```

### 4. Configure required KVMs

* Account-info (account storage)
* User credentials KVM

### 5. Deploy

Deploy the proxy to your preferred environment (e.g., `eval`, `prod`).

---

## 📂 Project Structure

```text
apiproxy/
├── proxies/
│   └── Proxy endpoint configurations
├── targets/
│   └── Backend target endpoints
├── policies/
│   └── Authentication, validation, caching, KVM, and fault policies
└── resources/
    └── jsc/
        ├── ExtractUsername.js
        ├── ParseAcc.js
        ├── ParseAccBalance.js
        ├── TxnUpdate.js
        ├── ValidateAccNum.js
        ├── ValidateFlag.js
        ├── creatAcc.js
        └── validateBalance.js
```

---

## 🎯 Highlights

This project demonstrates several real-world API Gateway design patterns:

* Secure banking APIs using OAuth 2.0, Basic Auth, and API Keys
* Custom JavaScript policies for parsing, validation, and business logic
* Response caching to reduce backend load
* KVM-based lightweight persistence
* Granular fault handling and error responses
* Per-user quota enforcement and access control
* Modular policy design following Apigee best practices

---

## 👤 Author

**Sai Nandini**

GitHub: https://github.com/nandini-sai

---

## 📄 License

MIT License
