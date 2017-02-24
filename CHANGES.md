# 0.1.1
* FIX: backward-delete failed to recognize an opening bracket of a non-empty form and was deleting it instead of stopping. Interestingly, this case was already covered in the unit tests and passed in 0.1.0. Need to investigate why the unit tests pass despite the bug. Probably best to avoid using 0.1.0 and 0.1.1 until that question is answered!
* Update dependencies

# 0.1.0
* Initial version on clojars
