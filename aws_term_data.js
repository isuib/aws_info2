naiyo = [
	{
		"no":1,
		"icon_name":"ManagementConsole.png",
		"Abbreviation":"AWS Management Console",
		"Original_meaning":"AWS Management Console",
		"Category":"Application Integration",
		"Page":"29",
		"Explanation":"Webブラウザ上のGUIでAWSを操作できるツール。さまざまな設定、管理ができる。",
		"AWS_URL":"https://aws.amazon.com/jp/console/"
	},
	{
		"no":2,
		"icon_name":"AwsCloud.png",
		"Abbreviation":"AWS Cloud",
		"Original_meaning":"AWS Cloud",
		"Category":"Groups",
		"Page":"10",
		"Explanation":"Amazonが提供するクラウドサービス",
		"AWS_URL":""
	},
	{
		"no":3,
		"icon_name":"InternetGateway.png",
		"Abbreviation":"Internet gateway",
		"Original_meaning":"Internet gateway",
		"Category":"General Resources",
		"Page":"185",
		"Explanation":"EC2インスタンスとインターネットの接続を担う。リクエストの宛先をプライベートIPアドレスに変換して、該当のEC2インスタンスにリクエストを送る",
		"AWS_URL":"https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/VPC_internet_Gateway.html"
	},
	{
		"no":4,
		"icon_name":"Router.png",
		"Abbreviation":"Router",
		"Original_meaning":"Router",
		"Category":"General Resources",
		"Page":"61",
		"Explanation":"ネットワークの出入り口になる部分に置かれる機器。片側から入ってきたデータの宛先を確認し、宛先に近いもう片側のネットワークにデータを転送する。",
		"AWS_URL":""
	},
	{
		"no":5,
		"icon_name":"ElasticIPA.png",
		"Abbreviation":"Elastic IP address",
		"Original_meaning":"Elastic IP address",
		"Category":"General Resources",
		"Page":"116",
		"Explanation":"固定のIPアドレスをインスタンスに結び付ける時に固定IPとして使われる",
		"AWS_URL":"https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/elastic-ip-addresses-eip.html"
	},
	{
		"no":6,
		"icon_name":"ELB.png",
		"Abbreviation":"Amazon ELB",
		"Original_meaning":"Amazon Elastic Balancing",
		"Category":"Networking & Content Delivery",
		"Page":"118",
		"Explanation":"サーバーに集中するアクセスを複数のサーバーやネットワークに振り分けるしくみ。負荷分散装置。",
		"AWS_URL":"https://aws.amazon.com/jp/elasticloadbalancing/"
	},
	{
		"no":7,
		"icon_name":"ALB.png",
		"Abbreviation":"ALB",
		"Original_meaning":"Application Load Balancer",
		"Category":"General Resources",
		"Page":"118",
		"Explanation":"開放型システム間相互接続（OSI）におけるアプリケーション層のレイヤー7で機能するロードバランサ。HTTP/HTTPSに最適。",
		"AWS_URL":""
	},
	{
		"no":8,
		"icon_name":"VPCGroup.png",
		"Abbreviation":"Amazon VPC",
		"Original_meaning":"Amazon Virtual Private Cloud",
		"Category":"Groups",
		"Page":"61",
		"Explanation":"",
		"AWS_URL":""
	},
	{
		"no":9,
		"icon_name":"VPC.png",
		"Abbreviation":"Amazon VPC",
		"Original_meaning":"Amazon Virtual Private Cloud",
		"Category":"Networking & Content Delivery",
		"Page":"168",
		"Explanation":"AWSアカウント専用の仮想ネットワーク。AWSで提供されるリソースのみを置くことができる。そのままでは閉じたネットワークであり、インターネットや社内LANとつなげる必要がある。",
		"AWS_URL":"https://aws.amazon.com/jp/vpc/"
	},
	{
		"no":10,
		"icon_name":"cidr.png",
		"Abbreviation":"CIDR",
		"Original_meaning":"Classless Inter-Domain Routing",
		"Category":"General Resources",
		"Page":"177",
		"Explanation":"「/24」,「/20」などのネットワークやサブネットの範囲を分ける表記。",
		"AWS_URL":""
	},
	{
		"no":11,
		"icon_name":"",
		"Abbreviation":"Subnet",
		"Original_meaning":"Subnet",
		"Category":"General Resources",
		"Page":"176",
		"Explanation":"大きなネットワークを小さく分割したネットワーク。セキュリティの境界を作る目的で使う。",
		"AWS_URL":""
	},
	{
		"no":12,
		"icon_name":"AmazonS3.png",
		"Abbreviation":"Amazon S3",
		"Original_meaning":"Amazon Simple Storage Service",
		"Category":"Storage",
		"Page":"129",
		"Explanation":"インターネット上にデータを保存する場所を借りることができる。",
		"AWS_URL":"https://aws.amazon.com/jp/s3/"
	},
	{
		"no":13,
		"icon_name":"CloudFront.png",
		"Abbreviation":"Amazon CloudFront",
		"Original_meaning":"Amazon CloudFront",
		"Category":"Networking & Content Delivery",
		"Page":"164",
		"Explanation":"高速コンテンツ配信ネットワークサービス。エッジサーバーを利用して高速化をおこなう。",
		"AWS_URL":"https://aws.amazon.com/jp/cloudfront/"
	},
	{
		"no":14,
		"icon_name":"Route53.png",
		"Abbreviation":"Amazon Route53",
		"Original_meaning":"Amazon Route53",
		"Category":"Networking & Content Delivery",
		"Page":"226",
		"Explanation":"DNSを提供。アクセスしてもらいたいアドレスを実際に使用しているEC2やS3などのエンドポイントに結び付ける。",
		"AWS_URL":"https://aws.amazon.com/jp/route53/"
	},
	{
		"no":15,
		"icon_name":"",
		"Abbreviation":"DNS",
		"Original_meaning":"Domain Name System",
		"Category":"General Resources",
		"Page":"64",
		"Explanation":"Webブラウザに入力したURLをIPアドレスに変換するしくみ。",
		"AWS_URL":""
	},
	{
		"no":16,
		"icon_name":"VPCPeering.png",
		"Abbreviation":"VPC Peering",
		"Original_meaning":"Virtual Private Cloud Peering",
		"Category":"General Resources",
		"Page":"194",
		"Explanation":"VPC同士を接続する機能。物理的ネットワークやほかのクラウドと接続することも可能。",
		"AWS_URL":""
	},
	{
		"no":17,
		"icon_name":"ACM.png",
		"Abbreviation":"ACM",
		"Original_meaning":"AWS Certificate Manager",
		"Category":"Security, Identity, & Compliance",
		"Page":"",
		"Explanation":"証明書を生成する",
		"AWS_URL":""
	},
	{
		"no":18,
		"icon_name":"SSH.png",
		"Abbreviation":"SSH",
		"Original_meaning":"Secure Shell",
		"Category":"General Resources",
		"Page":"114",
		"Explanation":"サーバーにインストールしたソフトウェアを操作するしくみ。",
		"AWS_URL":""
	},
	{
		"no":19,
		"icon_name":"t2micro.png",
		"Abbreviation":"t2.micro",
		"Original_meaning":"t2.micro",
		"Category":"General Resources",
		"Page":"111",
		"Explanation":"t2はEC2のインスタンスタイプ(マシンの用途)、microはインスタンスサイズを表す。t2は一時的に性能を上げるバースト機能に対応した汎用インスタンス。",
		"AWS_URL":""
	},
	{
		"no":20,
		"icon_name":"WAF.png",
		"Abbreviation":"AWS WAF",
		"Original_meaning":"AWS Web Application Firewall",
		"Category":"Security, Identity, & Compliance",
		"Page":"68",
		"Explanation":"送受信するデータについて通貨の可否を決める装置。WAFは実際のデータの中身まで見て不正なデータを排除する。",
		"AWS_URL":"https://aws.amazon.com/jp/waf/"
	},
	{
		"no":21,
		"icon_name":"EC2.png",
		"Abbreviation":"Amazon EC2",
		"Original_meaning":"Amazon Elastic Compute Cloud",
		"Category":"Compute",
		"Page":"94",
		"Explanation":"サーバーに必要なもの一式をクラウドで借りられる。インスタンスタイプや、OSとソフトウェアの組み合わせを選んでサーバーを作成する。",
		"AWS_URL":"https://aws.amazon.com/jp/ec2/"
	},
	{
		"no":22,
		"icon_name":"instance.png",
		"Abbreviation":"instance",
		"Original_meaning":"instance",
		"Category":"General Resources",
		"Page":"59",
		"Explanation":"実際に稼働している仮想化されたコンピューター。",
		"AWS_URL":""
	},
	{
		"no":23,
		"icon_name":"CloudWatch.png",
		"Abbreviation":"Amazon Cloudwatch",
		"Original_meaning":"Amazon Cloudwatch",
		"Category":"Management & Gavernance",
		"Page":"84",
		"Explanation":"AWSサービスでのリソースのモニタリングと管理を提供する。収集したログがしきい値を超えたら特定のアクションを起こすように設定できる。",
		"AWS_URL":"https://aws.amazon.com/jp/cloudwatch/"
	},
	{
		"no":24,
		"icon_name":"CloudTrail.png",
		"Abbreviation":"AWS CloudTrail",
		"Original_meaning":"AWS CloudTrail",
		"Category":"Management & Gavernance",
		"Page":"",
		"Explanation":"ログインなどのユーザアクティビティとAPI操作をログに記録するサービス。AWSアカウントのガバナンス、コンプライアンス、リスク監査などを行うことができる。",
		"AWS_URL":"https://aws.amazon.com/jp/cloudtrail/"
	},
	{
		"no":25,
		"icon_name":"SNS.png",
		"Abbreviation":"Amazon SNS",
		"Original_meaning":"Amazon Simple Notificaiton Service",
		"Category":"Application Integration",
		"Page":"",
		"Explanation":"そのためだけにサーバーを用意しなくてもアプリケーションからの通知を可能にするサービス。イベントドリブン(ユーザーが何かをおこなったタイミングで実行)なメッセージングを実現できる。",
		"AWS_URL":"https://aws.amazon.com/jp/sns/"
	},
	{
		"no":26,
		"icon_name":"Lambda.png",
		"Abbreviation":"AWS Lambda",
		"Original_meaning":"AWS Lambda",
		"Category":"Compute",
		"Page":"229",
		"Explanation":"データやリクエストのリアルタイム処理やバックエンドの処理を、自動実行するしくみ。Lambda関数と呼ばれる形式の関数を用いる。",
		"AWS_URL":"https://aws.amazon.com/jp/lambda/"
	},
	{
		"no":27,
		"icon_name":"NATGateway.png",
		"Abbreviation":"NAT Gateway",
		"Original_meaning":"Network Address Translation Gateway",
		"Category":"General Resources",
		"Page":"186",
		"Explanation":"EC2インスタンスとインターネットの接続を担う。インターネットからはサブネットに接続できないようにする。社内だけで使いたいサーバーに使う。",
		"AWS_URL":"https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpc-nat-gateway.html"
	},
	{
		"no":28,
		"icon_name":"Endpoints.png",
		"Abbreviation":"Endpoints",
		"Original_meaning":"Endpoints",
		"Category":"General Resources",
		"Page":"191",
		"Explanation":"インターネットゲートウェイを通ることなく、S3などの非VPCサービスとVPCを直結する接続点を作る。",
		"AWS_URL":"https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpc-endpoints.html"
	},
	{
		"no":29,
		"icon_name":"ECS.png",
		"Abbreviation":"Amazon ECS",
		"Original_meaning":"Amazon Elastic Container Service",
		"Category":"Containers",
		"Page":"233",
		"Explanation":"コンテナ化されたアプリケーションの実行やコンテナ同士の調整をおこなうオーケストレーションサービス。",
		"AWS_URL":"https://aws.amazon.com/jp/ecs/"
	},
	{
		"no":30,
		"icon_name":"container.png",
		"Abbreviation":"container",
		"Original_meaning":"container",
		"Category":"General Resources",
		"Page":"232",
		"Explanation":"プログラムの実行環境を隔離するしくみ。アプリケーションプロセスのみをコンテナないに隔離し、それに必要なライブラリとデータのみを含む。AWSはDocker形式のコンテナをサポートする。",
		"AWS_URL":""
	},
	{
		"no":31,
		"icon_name":"CodeBuild.png",
		"Abbreviation":"AWS CodeBuild",
		"Original_meaning":"AWS CodeBuild",
		"Category":"Developer Tools",
		"Page":"",
		"Explanation":"ソースコードのコンパイル、テストの実行、デプロイ可能な(サーバー上に展開・配置して利用できるようにすること)パッケージの生成を行う。基本的にCodePipelineで使われる。",
		"AWS_URL":"https://aws.amazon.com/jp/codebuild/"
	},
	{
		"no":32,
		"icon_name":"APIGateway.png",
		"Abbreviation":"Amazon API Gateway",
		"Original_meaning":"Amazon API Gateway",
		"Category":"Application Integration",
		"Page":"",
		"Explanation":"クライアントから受け取ったリクエストをそれぞれのサービスにルーティングする。",
		"AWS_URL":"https://aws.amazon.com/jp/api-gateway/"
	},
	{
		"no":33,
		"icon_name":"CodeDeploy.png",
		"Abbreviation":"AWS CodeDeploy",
		"Original_meaning":"AWS CodeDeploy",
		"Category":"Developer Tools",
		"Page":"",
		"Explanation":"AWS（Amazon EC2、AWS Fargate、AWS Lambda）やオンプレミスで実行されるサーバーなど、様々なサービスに対し、アプリケーションのデプロイを自動化することができるフルマネージド型のサービス。",
		"AWS_URL":"https://aws.amazon.com/jp/codedeploy/"
	},
	{
		"no":34,
		"icon_name":"CodePipeline.png",
		"Abbreviation":"AWS CodePipeline",
		"Original_meaning":"AWS CodePipeline",
		"Category":"Developer Tools",
		"Page":"",
		"Explanation":"開発したツールをビルドして配備するまでを自動化するツール",
		"AWS_URL":"https://aws.amazon.com/jp/codepipeline/"
	},
	{
		"no":35,
		"icon_name":"DynamoDB.png",
		"Abbreviation":"Amazon DynamoDB",
		"Original_meaning":"Amazon DynamoDB",
		"Category":"Database",
		"Page":"219",
		"Explanation":"キーバリューストア型(リレーショナルではない)のデータベース。",
		"AWS_URL":"https://aws.amazon.com/jp/dynamodb/"
	},
	{
		"no":36,
		"icon_name":"ECR.png",
		"Abbreviation":"Amazon ECR",
		"Original_meaning":"Amazon Elastic Container Registry",
		"Category":"Containers",
		"Page":"232",
		"Explanation":"コンテナを配置・管理するためのレジストリサービス。",
		"AWS_URL":"https://aws.amazon.com/jp/ecr/"
	},
	{
		"no":37,
		"icon_name":"SQS.png",
		"Abbreviation":"Amazon SQS",
		"Original_meaning":"Amazon Simple Queue Service",
		"Category":"Application Integration",
		"Page":"",
		"Explanation":"システム間で送信するデータを一時的にため込む場所を設けて、そこから順次中継していくメッセージキューイングサービス。主にシステムを構築する際に疎結合を実現するために利用される。",
		"AWS_URL":"https://aws.amazon.com/jp/sqs/"
	},
	{
		"no":38,
		"icon_name":"KMS.png",
		"Abbreviation":"AWS KMS",
		"Original_meaning":"AWS Key Management Service",
		"Category":"Security, Identity, & Compliance",
		"Page":"",
		"Explanation":"データの暗号化/復号化をするためのキーをセキュアに管理できるサービス。キーを簡単に生成できるうえ、保管することができる。",
		"AWS_URL":"https://aws.amazon.com/jp/kms/"
	},
	{
		"no":39,
		"icon_name":"SystemManager.png",
		"Abbreviation":"AWS Systems Manager",
		"Original_meaning":"AWS Systems Manager",
		"Category":"Management & Gavernance",
		"Page":"",
		"Explanation":"AWS内に構築したリソースを統合的に可視化、管理し、運用オペレーション自動化などの制御を実現するサービス。オンプレミスに構築されたサーバーも含め、ハイブリッドで可視化及び自動化を実現できる。",
		"AWS_URL":"https://aws.amazon.com/jp/systems-manager/"
	},
	{
		"no":40,
		"icon_name":"Aurora.png",
		"Abbreviation":"Amazon Aurora",
		"Original_meaning":"Amazon Aurora",
		"Category":"Database",
		"Page":"211",
		"Explanation":"MySQL/PostgreSQLと互換性にあるAWSオリジナルのリレーショナルデータベース。",
		"AWS_URL":"https://aws.amazon.com/jp/aurora/"
	},
	{
		"no":41,
		"icon_name":"SES.png",
		"Abbreviation":"Amazon SES",
		"Original_meaning":"Amazon Simple Email Service",
		"Category":"Business Applications",
		"Page":"",
		"Explanation":"メール配信サービス。独自ドメインの利用もできる。AWSの他のサービスと連携ができる。",
		"AWS_URL":"https://aws.amazon.com/jp/ses/"
	},
	{
		"no":42,
		"icon_name":"OSI.png",
		"Abbreviation":"OSI",
		"Original_meaning":"Open Systems Interconnection",
		"Category":"General Resources",
		"Page":"",
		"Explanation":"ネットワーク標準規格。OSIで用いられる通信のモデルがOSI参照モデルとよばれ、7階層の構造に分割し定義されている。",
		"AWS_URL":"https://www.itmanage.co.jp/column/osi-reference-model/"
	},
	{
		"no":43,
		"icon_name":"Docker.png",
		"Abbreviation":"Docker",
		"Original_meaning":"Docker",
		"Category":"General Resources",
		"Page":"232",
		"Explanation":"Docker社が開発したコンテナを管理するソフトウェア。サーバを起動する方法がシンプルで、起動や処理が速いことが特徴。",
		"AWS_URL":""
	},
	{
		"no":44,
		"icon_name":"API.png",
		"Abbreviation":"API",
		"Original_meaning":"Application Programming Interface",
		"Category":"General Resources",
		"Page":"136",
		"Explanation":"アプリケーションが呼び出せば予期した結果を返されるようなしくみ",
		"AWS_URL":""
	},
	{
		"no":45,
		"icon_name":"DMS.png",
		"Abbreviation":"AWS DMS",
		"Original_meaning":"AWS Database Migration Service",
		"Category":"Database",
		"Page":"",
		"Explanation":"データベースのデータ移行を支援するサービス。オンプレミス～AWS間、オンプレミス同士のデータ移行を主に支援する。",
		"AWS_URL":"https://aws.amazon.com/jp/dms/"
	},
	{
		"no":46,
		"icon_name":"Fargate.png",
		"Abbreviation":"AWS Fargate",
		"Original_meaning":"AWS Fargate",
		"Category":"Containers",
		"Page":"234",
		"Explanation":"コンテナ向けサーバーレスコンピューティングサービス。ECS、EKSの両方で動作する。",
		"AWS_URL":"https://aws.amazon.com/jp/fargate/"
	},
	{
		"no":47,
		"icon_name":"MaintenanceWindow.png",
		"Abbreviation":"Maintenance Window",
		"Original_meaning":"Maintenance Window",
		"Category":"General Resources",
		"Page":"",
		"Explanation":"パッチ当て等のメンテナンスを行うための時間設定",
		"AWS_URL":"https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/systems-manager-maintenance.html"
	},
	{
		"no":48,
		"icon_name":"Kubernetes.png",
		"Abbreviation":"K8s",
		"Original_meaning":"Kubernetes",
		"Category":"General Resources",
		"Page":"233",
		"Explanation":"Dockerなどのコンテナ仮想化ソフトウェアを管理、および自動化するためのオープンソースソフトウェア（OSS）のこと。コンテナオーケストレーションサービス。",
		"AWS_URL":"https://udemy.benesse.co.jp/development/system/kubernetes.html"
	},
	{
		"no":49,
		"icon_name":"EKS.png",
		"Abbreviation":"Amazon EKS",
		"Original_meaning":"Amazon Elastic Kubernetes Service",
		"Category":"Containers",
		"Page":"233",
		"Explanation":"KubernetesをAWSに載せたサービス",
		"AWS_URL":"https://aws.amazon.com/jp/eks/"
	},
	{
		"no":50,
		"icon_name":"CLI.png",
		"Abbreviation":"AWS CLI",
		"Original_meaning":"AWS Command Line Interface",
		"Category":"Developer Tools",
		"Page":"79",
		"Explanation":"ローカルのコマンド端末、またはサーバーからコマンドやスクリプトでAWSサービスの利用を迅速におこなうためのインターフェイス。",
		"AWS_URL":"https://aws.amazon.com/jp/cli/"
	}
];
naiyoitem = ["icon_name","Abbreviation","Original_meaning","Category","Page","Explanation","AWS_URL"];
