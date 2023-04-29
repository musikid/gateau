struct Cookie {
    name: String,
    value: String,
    expires: Option<u64>,
    maxAge: Option<u64>,
    domain: Option<String>,
    path: Option<String>,
    secure: Option<bool>,
    httpOnly: Option<bool>,
    sameSite: Option<String>,
}
