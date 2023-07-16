#include<iostream>
using namespace std;

class books{
    public:
        string title;
        float price;
        int pages;
};

int main()
{
    books book1;
    getline(cin,book1.title);
    cin>>book1.price>>book1.pages;
    cout<<book1.title<<book1.price<<book1.pages;
    return 0;
}